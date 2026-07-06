"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";

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

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    const supabase = getSupabaseClient();

    if (!supabase) {
      alert("Supabase is not configured.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("contacts").insert([
      {
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Message Sent Successfully!");

    setForm({
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
          Have a project in mind? Let&apos;s discuss how INTEZO INDIA can help
          transform your ideas into reality.
        </Typography>
      </Box>

      {/* Contact Cards */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
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

      {/* Contact Form + Map */}

      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        {/* Form */}

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Send a Message
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Fill out the form and we&apos;ll contact you shortly.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  required
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </Box>

              <TextField
                fullWidth
                required
                multiline
                rows={6}
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                endIcon={<SendIcon />}
                sx={{
                  width: "fit-content",
                  px: 4,
                  py: 1.5,
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Stack>
          </Box>
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