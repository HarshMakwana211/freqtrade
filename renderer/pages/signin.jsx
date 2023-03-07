import React from "react";
import Head from "next/head";
import Link from "next/link";
import SignIn from "../components/SignIn";

function Next() {
  return (
    <React.Fragment>
      <div>
        <SignIn />
      </div>
    </React.Fragment>
  );
}

export default Next;
