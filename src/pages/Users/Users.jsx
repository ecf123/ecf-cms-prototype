import { Button } from 'antd'
import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";
const Users = () => {
  return (
    <>
    <SearchBar/>
    <Button
          style={"button black round-border medium"}
          imgStyle={"medium-img white-svg"}
          textStyle={"text medium-text black"}
          buttonText={"Add Course"}
        >
          <Pencil />
        </Button>
    <ListComponentUniversal/>
    </>
  )
}

export default Users