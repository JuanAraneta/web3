import { useEffect, useCallback } from "react";
import { connector } from "../config/web3";
import { useWeb3React } from "@web3-react/core";

export default function Home() {
  const { active, activate, deactivate, account, error, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  const handleDisconnect = () => {
    deactivate();
    localStorage.setItem("previouslyConnected", "null");
  };

  return (
    <div>
      <h1>Web 3 at Dept</h1>
      <button>Sign in with Metamask</button>
    </div>
  );
}
