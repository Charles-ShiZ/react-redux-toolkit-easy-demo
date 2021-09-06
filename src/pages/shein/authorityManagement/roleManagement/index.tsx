import React from "react";
import { Radio } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/reducer";
export default function roleManagement() {
  const { roles } = useSelector((state: RootState) => state.roleManagement);
  return (
    <>
      <Radio.Group defaultValue={roles[0].id} buttonStyle="solid">
        {roles.map((role) => (
          <Radio.Button key={role.id} value={role.id}>
            {role.name}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
}
