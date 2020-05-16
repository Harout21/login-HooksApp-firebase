import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import Search from "./Search";
import DynamicButton from "./DynamicButton";
import firebase from '../firebase'
import {MetroSpinner} from "react-spinners-kit";

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

const Header = ({avatar, hidden, ...props}) => {

    const [comment, setComment] = useState('');
    const [editComment, setEditedComment] = useState('');

    useEffect(() => {
        setEditedComment('');
        if (firebase.getCurrentUsername()) {
            firebase.getCurrentUserComment().then(setComment)
        }
    }, []);

    function handleComentsChange(comment) {
        firebase.addComment(editComment);
        setComment(comment);
    }

    if (!firebase.getCurrentUsername()) {
        // not logged in
        alert('Please login first');
        props.history.history.history.replace('/login')
    }
    return (
        <StyledHeader className={`page__header${hidden ? " hidden" : ""}`}>
            <div className="header__left">
                <a className="link" href="www.google.com">
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
                </a>
            </div>
            <ul className="list actions">
                <li className="list__item action">
                    <Search className="search"/>
                </li>
                <li className="list__item action">
                    <DynamicButton
                        regular={
                            <Button className="button" primary>
                                Invite members
                            </Button>
                        }
                        small={
                            <Button
                                className="button button--icon"
                                icon={
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                            d="M8.99976 8.9998L13.6568 8.9998C14.2097 8.9998 14.6566 8.55291 14.6566 7.99995C14.6566 7.44699 14.2097 7.0001 13.6568 7.0001L8.99976 7.0001L8.99976 2.34309C8.99976 1.79014 8.55287 1.34325 7.99991 1.34325C7.44695 1.34325 7.00006 1.79014 7.00006 2.34309L7.00006 7.0001L2.34305 7.0001C1.7901 7.0001 1.34321 7.44699 1.34321 7.99995C1.3425 8.27643 1.45493 8.52604 1.63595 8.70706C1.81697 8.88808 2.06728 8.9998 2.34305 8.9998L7.00006 8.9998V13.6568C6.99935 13.9333 7.11178 14.1829 7.2928 14.3639C7.47382 14.5449 7.72414 14.6567 7.99991 14.6567C8.55287 14.6567 8.99976 14.2098 8.99976 13.6568V8.9998Z"
                                            fill="black"
                                        />
                                    </svg>
                                }
                                primary
                            />
                        }
                    />
                </li>
                <li className="list__item action">
                    <DynamicButton
                        regular={
                            <Button
                                className="button button--transparent"
                                icon={
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                            d="M4.5 7C2.846 7 1.5 5.654 1.5 4C1.5 2.346 2.846 1 4.5 1C6.154 1 7.5 2.346 7.5 4C7.5 5.654 6.154 7 4.5 7ZM4.5 3C3.949 3 3.5 3.449 3.5 4C3.5 4.551 3.949 5 4.5 5C5.051 5 5.5 4.551 5.5 4C5.5 3.449 5.051 3 4.5 3Z"
                                            fill="#bd4444"
                                        />
                                       <path
                                            d="M8 15H2C1.448 15 1 14.553 1 14V10.5C1 8.846 2.346 7.5 4 7.5H6C7.654 7.5 9 8.846 9 10.5V14C9 14.553 8.552 15 8 15ZM3 13H7V10.5C7 9.948 6.551 9.499 6 9.499H4C3.449 9.499 3 9.948 3 10.5V13Z"
                                            fill="#8492A6"
                                        />
                                       <path
                                            d="M11.5 7C9.846 7 8.5 5.654 8.5 4C8.5 2.346 9.846 1 11.5 1C13.154 1 14.5 2.346 14.5 4C14.5 5.654 13.154 7 11.5 7ZM11.5 3C10.948 3 10.5 3.449 10.5 4C10.5 4.551 10.948 5 11.5 5C12.052 5 12.5 4.551 12.5 4C12.5 3.449 12.052 3 11.5 3Z"
                                            fill="#8492A6"
                                        />
                                       <path
                                            d="M14 15H10.5C9.947 15 9.5 14.553 9.5 14C9.5 13.447 9.947 13 10.5 13H13V10.5C13 9.948 12.552 9.499 12 9.499H10C9.447 9.499 9 9.052 9 8.499C9 7.946 9.447 7.499 10 7.499H12C13.654 7.499 15 8.845 15 10.499V14C15 14.553 14.553 15 14 15Z"
                                            fill="#8492A6"
                                        />
                                    </svg>
                                }
                            >
                                Manage members
                                <Button className="button button--transparent" type="submit"
                                        onClick={() => handleComentsChange(editComment)}>Submit Comment</Button>
                            </Button>

                        }
                        small={
                            <Button
                                className="button button--transparent button--icon"
                                icon={
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                            d="M4.5 7C2.846 7 1.5 5.654 1.5 4C1.5 2.346 2.846 1 4.5 1C6.154 1 7.5 2.346 7.5 4C7.5 5.654 6.154 7 4.5 7ZM4.5 3C3.949 3 3.5 3.449 3.5 4C3.5 4.551 3.949 5 4.5 5C5.051 5 5.5 4.551 5.5 4C5.5 3.449 5.051 3 4.5 3Z"
                                            fill="#8492A6"
                                        />
                                       <path
                                            d="M8 15H2C1.448 15 1 14.553 1 14V10.5C1 8.846 2.346 7.5 4 7.5H6C7.654 7.5 9 8.846 9 10.5V14C9 14.553 8.552 15 8 15ZM3 13H7V10.5C7 9.948 6.551 9.499 6 9.499H4C3.449 9.499 3 9.948 3 10.5V13Z"
                                            fill="#8492A6"
                                        />
                                       <path
                                            d="M11.5 7C9.846 7 8.5 5.654 8.5 4C8.5 2.346 9.846 1 11.5 1C13.154 1 14.5 2.346 14.5 4C14.5 5.654 13.154 7 11.5 7ZM11.5 3C10.948 3 10.5 3.449 10.5 4C10.5 4.551 10.948 5 11.5 5C12.052 5 12.5 4.551 12.5 4C12.5 3.449 12.052 3 11.5 3Z"
                                            fill="#8492A6"
                                        />
                                       <path
                                            d="M14 15H10.5C9.947 15 9.5 14.553 9.5 14C9.5 13.447 9.947 13 10.5 13H13V10.5C13 9.948 12.552 9.499 12 9.499H10C9.447 9.499 9 9.052 9 8.499C9 7.946 9.447 7.499 10 7.499H12C13.654 7.499 15 8.845 15 10.499V14C15 14.553 14.553 15 14 15Z"
                                            fill="#8492A6"
                                        />
                                    </svg>
                                }
                            />
                        }
                    />
                </li>

                <li className="list__item action">
                    <Button
                        className="button button--transparent button--icon button--notification"
                        icon={
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                               <path
                                    d="M9 13H7C6.448 13 6 13.447 6 14C6 14.553 6.448 15 7 15H9C9.553 15 10 14.553 10 14C10 13.447 9.553 13 9 13Z"
                                    fill="#8492A6"
                                />
                               <path
                                    d="M13.641 8.122L11.007 3.708C10.981 3.664 10.95 3.621 10.917 3.582C10.456 2.879 9.775 2.393 9 2.161V1C9 0.448 8.552 0 8 0C7.448 0 7 0.448 7 1V2.161C6.226 2.393 5.546 2.878 5.085 3.579C5.051 3.619 5.021 3.662 4.993 3.708L2.359 8.122C2.124 8.516 2 8.969 2 9.432C2 10.848 3.152 12 4.568 12H11.433C12.849 12 14 10.848 14 9.432C14 8.97 13.876 8.518 13.641 8.122ZM11.433 10H4.568C4.255 10 4 9.745 4 9.432C4 9.328 4.026 9.232 4.077 9.147L6.644 4.845C6.671 4.81 6.697 4.774 6.72 4.736C6.996 4.275 7.475 4 8 4C8.525 4 9.004 4.275 9.28 4.736C9.303 4.775 9.329 4.811 9.356 4.845L11.922 9.146C11.974 9.232 12 9.328 12 9.432C12 9.745 11.745 10 11.433 10Z"
                                    fill="#8492A6"
                                />
                            </svg>
                        }
                    />
                </li>
                <Button
                    style={{marginRight: "20px", backgroundColor: "red"}}
                    type="submit"
                    variant="contained"
                    onClick={() => props.history.history.history.push('/home')}
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
                    <h2 style={{color: "black"}}> Your comment: {comment ? `"${comment}"` :
                        <MetroSpinner size={20}/>}</h2>
                    <input autoComplete="off" value={editComment} onChange={e => setEditedComment(e.target.value)}
                           placeholder="Change it"/>
                </li>
            </ul>
        </StyledHeader>
    );

    async function logout() {
        await firebase.logout();
        sessionStorage.removeItem('token');
        props.history.history.history.push('/register')
    }
};

export default Header;
