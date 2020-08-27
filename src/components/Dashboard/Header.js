import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import firebase from '../firebase'
import { useHistory } from 'react-router-dom'

const StyledHeader = styled.header`
  .header__left {
    padding-left: 8px;
    padding-right: 24px;
    width: 132px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 -4px;
    width: calc(100% - 132px);
  }

  .action {
    margin: 0 12px;
  }

  .actions > .action:first-child {
    flex-grow: 1;
  }

  .search {
    display: flex;
    justify-content: flex-start;
  }

  .search form {
    flex-grow: 0;
    width: 296px;
  }
`;




const Header = ({avatar, hidden}) => {
    const history = useHistory();
    const [comment, setComment] = useState('');
    const [editComment, setEditedComment] = useState('');

    useEffect(() => {
        setEditedComment('');
        if (firebase.getCurrentUsername()) {
            firebase.getCurrentUserComment().then(setComment)
        }
    }, []);

   function handleKeyDown (e) {
       if (e.keyCode === 13) {
            handleComentsChange(editComment)
        }
    }

    function handleComentsChange(comment) {
        firebase.addComment(editComment);
        setComment(comment);
    }

    if (!firebase.getCurrentUsername()) {
        // not logged in
        alert('Please login first');
        history.replace('/login')
    }
    return (
        <StyledHeader className={`page__header${hidden ? " hidden" : ""}`}>
            <div className="header__left">
                <div className="link" >
                    <svg
                        width="90"
                        height="26"
                        viewBox="0 0 100 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                       <path
                            fillRule="sads"
                            clipRule="asdfsad"
                            d="M200,300 L400,50 L600,300
                              L800,550 L1000,300"
                            fill="green"
                        />
                    </svg>
                </div>
            </div>
            <ul className="list actions">
                <li className="list__item action">
                </li>
                <li className="list__item action">
                                <Button className="button button--transparent" type="submit"
                                        onClick={() => handleComentsChange(editComment)}>Submit Comment</Button>
                </li>

                <li className="list__item action">
                    <h2 style={{color: "black",fontSize:"20px"}}> Your comment: {comment ? `"${comment}"` :""}</h2>
                    <input  className="input-comment-hj" autoComplete="off" value={editComment} onChange={e => setEditedComment(e.target.value)}
                            onKeyDown={(e)=>handleKeyDown(e)}   placeholder="Change it"/>
                </li>

                <Button
                    onClick={()=> history.push('/home')}
                    style={{marginRight: "20px", backgroundColor: "red"}}
                    type="submit"
                    variant="contained"
                    className="button button--transparent">
                    Home
                </Button>
                <Button
                    style={{backgroundColor: "navy"}}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={logout}
                    className="button button--transparent ">
                    Logout
                </Button>
                <li className="list__item action">
                    <Button className="button button--avatar" avatar={avatar}/>
                </li>
            </ul>

        </StyledHeader>
    );

    async function logout() {
        await firebase.logout();
        sessionStorage.removeItem('token');
        history.push('/register')
    }
};

export default Header;
