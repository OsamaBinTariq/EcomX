import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to right, #1f2937, #111827)",
        color: "white",
        py: 8,
        mt: "auto",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to right, #3b82f6, #8b5cf6)"
        }}
      />

      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ mt: { xs: 0, sm: 0, md: 0 } }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "monospace", letterSpacing: 2 }}
            >
              ECOM<span style={{ color: "#60a5fa" }}>X</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 300
              }}
            >
              Designed and built by <b>Osama Bin Tariq</b>. A showcase of modern
              web development using React, Material UI, and advanced state
              management.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                {
                  icon: <LinkedInIcon />,
                  href: "https://www.linkedin.com/in/osamabintariq-webdev",
                  color: "#0077b5"
                },
                {
                  icon: <GitHubIcon />,
                  href: "https://github.com/OsamaBinTariq",
                  color: "#ffffff"
                },
                {
                  icon: <TwitterIcon />,
                  href: "#",
                  color: "#1DA1F2"
                },
                {
                  icon: <InstagramIcon />,
                  href: "#",
                  color: "#E1306C"
                }
              ].map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: social.color,
                      transform: "translateY(-3px)",
                      boxShadow: `0 4px 12px ${social.color}66`
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ mt: { xs: 4, sm: 4, md: 0 } }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "white", mb: 3 }}
            >
              EXPLORE
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {["Home", "Cart", "Portfolio", "Contact Me"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "Cart"
                      ? "/cart"
                      : "#"
                  }
                  underline="none"
                  sx={{
                    mb: 2,
                    color: "#9ca3af",
                    transition: "0.2s",
                    width: "fit-content",
                    "&:hover": {
                      color: "#60a5fa",
                      transform: "translateX(5px)"
                    }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

         
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ mt: { xs: 4, sm: 4, md: 0 } }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "white", mb: 3 }}
            >
              GET IN TOUCH
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOnIcon sx={{ color: "#60a5fa", mr: 2 }} />
              <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                Lahore, Pakistan
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <EmailIcon sx={{ color: "#60a5fa", mr: 2 }} />
              <Link
                href="mailto:osamatariq969@gmail.com"
                underline="none"
                color="inherit"
                sx={{ "&:hover": { color: "#60a5fa" } }}
              >
                osamatariq969@gmail.com
              </Link>
            </Box>

            <Typography
              variant="caption"
              sx={{ color: "#6b7280", display: "block", mt: 4 }}
            >
              Available for freelance & full-time opportunities.
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.1)",
            mt: 6,
            mb: 3
          }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#6b7280" }}>
            © {new Date().getFullYear()} Osama Bin Tariq. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
