import {
  Box,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const levels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

interface CustomListParams {
  items: {
    name: string;
    level: string;
    technologies: string[];
  }[];
}

const CustomList = ({ items }: CustomListParams) => {
  return (
    <List
      sx={{
        position: "relative",
        overflow: "auto",
        width: "100%",
        maxHeight: 294,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {items.map((skill) => (
        <li key={`section-${skill.name}`}>
          <ul>
            <ListSubheader
              color={"primary"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "bold",
                fontSize: 18,
                py: 2,
              }}
            >
              {skill.name}
              <Chip label={skill.level} />
            </ListSubheader>
            {skill.technologies.map((technology) => (
              <ListItemButton
                key={`item-${skill.name}-${technology}`}
                sx={{ py: 2 }}
              >
                <ListItemText primary={`${technology}`} />
              </ListItemButton>
            ))}
            <Divider flexItem />
          </ul>
        </li>
      ))}
    </List>
  );
};

const SkillsComponent = () => {
  const skillsLanguages = [
    {
      name: "JavaScript",
      level: levels.intermediate,
      technologies: [
        "React",
        "React Native",
        "NodeJS",
        "Express",
        "TypeScript",
      ],
    },
    {
      name: "PHP",
      level: levels.intermediate,
      technologies: ["Symfony", "Laravel"],
    },
    {
      name: "C",
      level: levels.beginner,
      technologies: [],
    },
    {
      name: "Python",
      level: levels.beginner,
      technologies: ["Flask"],
    },
  ];

  const skillTools = [
    {
      name: "Git",
      level: levels.intermediate,
      technologies: [],
    },
    {
      name: "Docker",
      level: levels.beginner,
      technologies: [],
    },
    {
      name: "Linux",
      level: levels.intermediate,
      technologies: ["Bash"],
    },
    {
      name: "SQL",
      level: levels.intermediate,
      technologies: ["MySQL", "PostgreSQL"],
    },
    {
      name: "NoSQL",
      level: levels.beginner,
      technologies: ["MongoDB"],
    },
    {
      name: "Management",
      level: levels.intermediate,
      technologies: ["Trello", "YouTrack"],
    },
  ];

  return (
    <Box sx={{ mt: 1 }}>
      <Paper elevation={12}>
        <Grid container p={1} spacing={2}>
          <Grid xs={12} md={6}>
            <Typography
              variant={"h4"}
              align={"center"}
              color={"primary"}
              sx={{ mb: 2 }}
            >
              Languages
            </Typography>
            <CustomList items={skillsLanguages} />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography
              variant={"h4"}
              align={"center"}
              color={"primary"}
              sx={{ mb: 2 }}
            >
              Tools
            </Typography>
            <CustomList items={skillTools} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SkillsComponent;
