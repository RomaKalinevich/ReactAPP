import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        "API-KEY": "161c86e1-dda8-42e5-85e8-05c38ad78061"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    followUser (id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unFollowUser (id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getProfile(userId) {
        return  profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return  instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
    }
}


export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return  instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(email, password, rememberMe = false) {
        return  instance.delete(`auth/login`)
    }
}