import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface role {
  id:string,
  name: string,
  rank:number
}

const initialState = {
  roles: [{
    id:"0001",
    name: "管理员",
    rank:1
  }, {
    id: "0002",
    name: "负责人",
    rank:2
  }, {
    id: "0003",
    name: "组长",
    rank:3
  }, {
    id: "0004",
    name: "组员",
    rank:4
  }],
};

const slice = createSlice({
  name: "roleManagement",
  initialState,
  reducers: {
    addRoles(state, action:PayloadAction<role>) {
      const role = action.payload;
      const isRepeated = state.roles.some(({ id, name, rank }) => {
        return role.id === id || role.name === name || role.rank === rank;
      });
      if (!isRepeated) {
        state.roles.push(role);
      } else {
        throw new Error("新增角色重复！");
      }

    }
  }
});
export const {
  addRoles
} = slice.actions;

export default slice.reducer;