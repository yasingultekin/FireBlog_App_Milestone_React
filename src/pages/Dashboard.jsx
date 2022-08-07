import { Grid, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";
import Box from "@mui/material/Box";
import { useFetch } from "../helpers/functions";
import loading from "../assets/loading.gif";

const Dashboard = () => {
  const { isLoading, contentList } = useFetch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 2,
          color: "primary",
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          ──── DASHBOARD ────
        </Typography>
      </Box>
      <div className="blog-card d-flex justify-content-center flex-wrap">
        {isLoading
          ? { loading }
          : contentList?.map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
      </div>
    </Box>
  );
};

export default Dashboard;
