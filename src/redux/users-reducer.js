import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/validators/usersHelper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const followUserSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
});

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let response = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const followUser = (userId) => {
    return async (dispatch) => {
        await followUnfollow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followUserSuccess);
    }
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        await followUnfollow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;