import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage(): JSX.Element {
  
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>

      {/* Heading */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight={700}>
          Contact Us
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto", mt: 2 }}
        >
          Have a project in mind? Let&rsquo;s discuss how INTEZO INDIA can help
          transform your ideas into reality.
        </Typography>
      </Box>

      {/* Contact Cards */}

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
          mb: 8,
        }}
      >
        {[
          {
            icon: <LocationOnOutlinedIcon color="primary" sx={{ fontSize: 45 }} />,
            title: "Address",
            value: "Pune, Maharashtra, India",
          },
          {
            icon: <PhoneOutlinedIcon color="primary" sx={{ fontSize: 45 }} />,
            title: "Phone",
            value: "+91 98765 43210",
          },
          {
            icon: <EmailOutlinedIcon color="primary" sx={{ fontSize: 45 }} />,
            title: "Email",
            value: "info@intezoindia.com",
          },
          {
            icon: <AccessTimeOutlinedIcon color="primary" sx={{ fontSize: 45 }} />,
            title: "Working Hours",
            value: "Mon - Sat\n9:00 AM - 6:00 PM",
          },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 260,
              textAlign: "center",
              borderRadius: 3,
              transition: ".3s",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <CardContent sx={{ py: 5 }}>
              {item.icon}

              <Typography mt={2} fontWeight={700}>
                {item.title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ whiteSpace: "pre-line" }}
              >
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Form + Map */}

      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        {/* Contact Form */}

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={1}>
            Send a Message
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Fill out the form and we&rsquo;ll contact you shortly.
          </Typography>

          <Stack spacing={3}>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField fullWidth label="Full Name" />

              <TextField fullWidth label="Email Address" />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField fullWidth label="Phone Number" />

              <TextField fullWidth label="Subject" />
            </Box>

            <TextField
              fullWidth
              multiline
              rows={6}
              label="Message"
            />

            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                width: "fit-content",
                px: 4,
                py: 1.5,
              }}
            >
              Send Message
            </Button>

          </Stack>
        </Paper>

        {/* Google Map */}

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            borderRadius: 3,
            overflow: "hidden",
            minHeight: 520,
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              minHeight: "520px",
            }}
            loading="lazy"
          />
        </Paper>

      </Box>
    </Container>
  );
}