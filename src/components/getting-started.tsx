import {
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import SailingIcon from "@mui/icons-material/Sailing";
import LightModeIcon from "@mui/icons-material/LightMode";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkIcon from "@mui/icons-material/Link";
import SyncIcon from "@mui/icons-material/Sync";
import { HighlightBox } from "./boxes";

export default function GettingStarted() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={8} lg={6} sx={{ justifyContent: "center" }}>
          <Paper sx={{ p: 2 }}>
            <List disablePadding>
              <ListSubheader>Features</ListSubheader>

              <ListItem>
                <ListItemIcon>
                  <SentimentVerySatisfiedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    href="https://huggingface.co/docs/huggingface.js/index"
                    target="_blank"
                    rel="noopener"
                  >
                    huggingface.js
                  </Link>{" "}
                  components (WIP)
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    href="https://js.langchain.com/docs"
                    target="_blank"
                    rel="noopener"
                  >
                    langchain.js
                  </Link>{" "}
                  components (WIP)
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ViewQuiltIcon />
                </ListItemIcon>
                <ListItemText>
                  Rapid prototyping with{" "}
                  <Link
                    href="https://mui.com/material-ui/getting-started/overview/"
                    target="_blank"
                    rel="noopener"
                  >
                    MUI
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LightModeIcon />
                </ListItemIcon>
                <ListItemText>
                  Dark / light theme based on system preferences
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SyncIcon />
                </ListItemIcon>
                <ListItemText>
                  Sync your repo on GitHub with your 🤗 Space
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SailingIcon />
                </ListItemIcon>
                <ListItemText>Runs in Docker or localhost</ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item sm={4} lg={3}>
          <Stack gap={2}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="body1">
                Explore our{" "}
                <Link
                  href="https://huggingface.co/spaces/failfast/nextjs-docker-starter/blob/main/README.md"
                  target="_blank"
                  rel="noopener"
                >
                  README
                </Link>{" "}
                for a comprehensive guide on local development, Docker
                utilization, secret management, and GitHub-based Space control.
              </Typography>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <Typography variant="body1">
                Something missing?{" "}
                <Link
                  href="https://huggingface.co/spaces/failfast/nextjs-docker-starter/discussions"
                  target="_blank"
                  rel="noopener"
                >
                  Please let us know!
                </Link>
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
