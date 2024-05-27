import React from "react";
import Event from "@/components/Events";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SIGMA - Events",
    description: "This is Home for Solid Pro",
};

const TeamPage = () => {
    return (
      <div className="pb-20 pt-40">
        <Event />
      </div>
    );
  };
  
export default TeamPage;