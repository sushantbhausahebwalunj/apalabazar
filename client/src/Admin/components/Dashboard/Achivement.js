import styled from "@emotion/styled";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
const TrignleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

function Achivement() {
  return (
    <div className="p-5">
      <Card className=" " sx={{ position: "relative" ,  bgcolor:"black", color:"white" }}>
        <CardContent>
          <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
            Shop with apana bazar
          </Typography>
          <Typography variant="body2">Congratulation 🥰</Typography>
          <Typography variant="h5" sx={{my:1.1}}>200k</Typography>
          <Button size="small" variant="contained">
            view sales
          </Button>
          <TrignleImg src=""></TrignleImg>
          <TrophyImg src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-c4d-hd-enterprise-golden-trophy-enterprise-honor-gold-cup-cupenterprise-honorqualificationgolden-png-image_621239.jpg"></TrophyImg>
          <CardContent />
        </CardContent>
      </Card>
    </div>
  );
}

export default Achivement;
