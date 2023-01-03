import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdminSidebar from "../components/NavbarrIndiv";

const { useState, useEffect } = require("react");

const WalletInd = () => {
  const [wallet, setWallet] = useState("");
  const { id, id1 } = useParams();
  useEffect(() => {
    const fetchWallet = async () => {
      const data = await axios.get(`/indiviualtrainee/wallet/${id}`);
      setWallet(data.data);
      console.log(data.data);
    };
    fetchWallet();
  }, []);

  return (
    <div>
      <AdminSidebar />
      <div class="main">
        <h1>Wallet:</h1>
        {wallet && <h2>{wallet}</h2>}
      </div>
    </div>
  );
};

export default WalletInd;
