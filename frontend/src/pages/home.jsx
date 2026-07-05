import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="homePage">
        <div className="navBar ">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ color: "#163A5F" }}>Lumivo Video Call</h2>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "#1b314c",
            }}
          >
            <IconButton
              onClick={() => {
                navigate("/history");
              }}
            >
              <RestoreIcon />
            </IconButton>
            <p>History</p>

            <Button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
              }}
              sx={{
                color: "#1b314c",
              }}
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="meetContainer ">
          <div className="leftPanel">
            <div>
              <h2 style={{ color: "#1B365D" }}>
                Providing Quality Video Call Just Like Quality Education
              </h2>

              <div
                style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
              >
                <TextField
                  onChange={(e) => setMeetingCode(e.target.value)}
                  id="outlined-basic"
                  label="Meeting Code"
                  variant="outlined"
                />
                <Button
                  onClick={handleJoinVideoCall}
                  variant="contained"
                  style={{ color: "#ffffff", backgroundColor: "#1f1e4a" }}
                >
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div className="rightPanel">
            <img srcSet="/logo4.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
