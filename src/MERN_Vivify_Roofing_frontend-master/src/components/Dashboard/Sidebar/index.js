import React from "react";
import NewLead from "./NewLead";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { capitaliseMultiple } from "../../../utils/capitalise";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

const SideMenu = props => {
  let {
    changeScreen,
    currentUser,
    data,
    activeScreen,
    toggleHamburger
  } = props;

  return (
    <>
      <div className="sidemenu-mob">
        <NewLead {...props} />
        {currentUser.role === "Admin" && (
          <div
            className={isActive("inbox", activeScreen)}
            onClick={() => {
              changeScreen("inbox");
              toggleHamburger();
            }}
          >
            <p>
              Unassigned (
              {
                data.filter(datum => {
                  return !datum.assignedTrade && !datum.sold && !datum.archived;
                }).length
              }
              )
            </p>
          </div>
        )}
        <div
          className={isActive("in progress", activeScreen)}
          onClick={() => {
            changeScreen("in progress");
            toggleHamburger();
          }}
        >
          <p>
            {currentUser.role === "Admin" ? "Assigned" : "New Leads"} (
            {
              data.filter(datum => {
                return datum.assignedTrade && !datum.sold && !datum.archived;
              }).length
            }
            )
          </p>
        </div>
        <div
          className={isActive("sold", activeScreen)}
          onClick={() => {
            changeScreen("sold");
            toggleHamburger();
          }}
        >
          <p>
            Sold (
            {
              data.filter(datum => {
                return datum.sold;
              }).length
            }
            )
          </p>
        </div>
        <div
          className={isActive("archive", activeScreen)}
          onClick={() => {
            changeScreen("archive");
            toggleHamburger();
          }}
        >
          <p>
            Archived (
            {
              data.filter(datum => {
                return datum.archived;
              }).length
            }
            )
          </p>
        </div>
        {currentUser.role === "Admin" && (
          <div>
            <div className="sidebar-bottom-button mob-button">
              <Link to="/register" className="button-text">
                Register User
              </Link>
            </div>
            <div className="sidebar-bottom-button">
              <Link to="/users/sales" className="button-text">
                Delete User
              </Link>
            </div>
          </div>
        )}
        <Link to='/me' className="button">
          <p className="button-text">Password</p>
        </Link>
        <div className="button" onClick={deleteToken}>
          <p className="button-text">Logout</p>
        </div>
      </div>
    </>
  );
};

const isActive = (box, prop) => {
  return box === prop ? "sidebar-active-box" : "sidebar-inactive-box";
};

// needing token to login > user
const deleteToken = () => {
  localStorage.removeItem("token");
  document.location.reload();
};

const Sidebar = props => {
  let {
    data,
    currentUser,
    activeScreen,
    changeScreen,
    back,
    mobileShowList,
    newLead,
    hamburger,
    toggleHamburger
  } = props;

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-info">
          <h1 className="sidebar-logo">VIVIFY</h1>
          <div className="sidebar-user">
            <h4 className="user-name">
              Hi, {capitaliseMultiple(currentUser.name)}
            </h4>
          </div>
          <div className="hamburger">
            {mobileShowList ? (
              <div onClick={() => toggleHamburger()}>
                <FaAngleDown size="33px" />
              </div>
            ) : (
              <FaAngleLeft size="33px" onClick={() => back()} />
            )}
          </div>
        </div>
        {hamburger ? <SideMenu {...props} currentUser={currentUser} /> : null}
        <div className="sidebar-leadboxes">
          <NewLead {...props} newLead={newLead} />
          {currentUser.role === "Admin" && (
            <div
              className={isActive("inbox", activeScreen)}
              onClick={() => changeScreen("inbox")}
            >
              <p>
                Unassigned (
                {
                  data.filter(datum => {
                    return (
                      !datum.assignedTrade && !datum.sold && !datum.archived
                    );
                  }).length
                }
                )
              </p>
            </div>
          )}
          <div
            className={isActive("in progress", activeScreen)}
            onClick={() => changeScreen("in progress")}
          >
            <p>
              {currentUser.role === "Admin" ? "Assigned" : "New Leads"} (
              {
                data.filter(datum => {
                  return datum.assignedTrade && !datum.sold && !datum.archived;
                }).length
              }
              )
            </p>
          </div>
          <div
            className={isActive("sold", activeScreen)}
            onClick={() => changeScreen("sold")}
          >
            <p>
              Sold (
              {
                data.filter(datum => {
                  return datum.sold;
                }).length
              }
              )
            </p>
          </div>
          <div
            className={isActive("archive", activeScreen)}
            onClick={() => changeScreen("archive")}
          >
            <p>
              Archived (
              {
                data.filter(datum => {
                  return datum.archived;
                }).length
              }
              )
            </p>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        {currentUser.role === "Admin" && (
          <div className="sidebar-bottom-item">
            <h4>Manage User</h4>
            <div className="sidebar-bottom-container">
              <div className="sidebar-bottom-button">
                <Link to="/register" className="button-text">
                  Register
                </Link>
              </div>
              <div className="sidebar-bottom-button">
                <Link to="/users/sales" className="button-text">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="sidebar-bottom-item">
          <h4>Manage Account</h4>
          <div className="sidebar-bottom-container">
            <div className="sidebar-bottom-button">
              <Link to='/me' className="button-text">
                Password
              </Link>
            </div>
            <div className="sidebar-bottom-button" onClick={deleteToken}>
              <p className="button-text">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
