import React from "react";
import {create} from "react-test-renderer";
import ProfileInfoStatus from "./ProfileInfoStatus";

describe("ProfileStatus component",() =>{
   test("status from props should be in the state",() => {
       const component = create(<ProfileInfoStatus status="test status"/>);
       const root  = component.root;
       let span = root.findByType("span");
       expect(span.children[0]).toBe("test status");
   })
});