import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { basePath } from "./config";
import { Contacts } from "./components/contacts";

export function Send({ onNext }) {
  const history = useHistory();

  const [recipient, setRecipient] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h3>Send Money</h3>
        <form
          style={{ width: 500 }}
          onSubmit={(e) => {
            e.preventDefault();
            onNext({ recipient });
            history.push(`${basePath}/success`);
          }}
        >
          <div style={{}}>
            <input
              value={recipient}
              onChange={(e) => {
                setRecipient(e.target.value);
              }}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "15px 10px",
                border: "1px solid #9da3a6",
                borderRadius: 4,
              }}
              placeholder="Email or phone number"
            />
          </div>
          <button
            type="submit"
            style={{
              display: "flex",
              marginLeft: "auto",
              marginTop: 20,
              justifyContent: "end",
              alignItems: "end",
              backgroundColor: "#0070ba",
              padding: "13px 20px",
              color: "white",
              border: 0,
              borderRadius: 4,
            }}
          >
            Next
          </button>
        </form>
        <Contacts
          onClick={(name) => {
            setRecipient(name);
            onNext({ recipient: name });
            history.push(`${basePath}/success`);
          }}
        />
      </div>
    </div>
  );
}
