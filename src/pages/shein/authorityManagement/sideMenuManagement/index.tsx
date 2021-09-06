import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addRoles } from "../roleManagement/slice";
export default function sideMenuManagement() {
  const dispatch = useDispatch();
  console.log(
    addRoles({
      id: "0008",
      name: "施展鸿",
      rank: 0,
    })
  );
  return (
    <Button
      onClick={() => {
        dispatch(
          addRoles({
            id: "0008",
            name: "施展鸿",
            rank: 0,
          })
        );
      }}
    >
      添加角色
    </Button>
  );
}
