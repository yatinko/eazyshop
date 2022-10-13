import { useMantineTheme, Grid, Stack, Anchor, createStyles } from "@mantine/core";

// Creating styles for the drawer.
const useStyles = createStyles(() => ({
  drawer: {
    width: "100%",
    height: "17em",
    margin: "unset",
    paddingLeft: "2em",
    paddingRight: "2em"
  }
}));

// Drawer component definition.
const Drawer = (drawerLinkItems) => {
  // Theme object.
  const theme = useMantineTheme();
  const { classes } = useStyles();

  // Mapping drawer links.
  const drawerItems = drawerLinkItems.links.map(({ label, link }) => (
    <Anchor key={label} href={link} size="sm" color={theme.colors.brand}>
      {label}
    </Anchor>
  ));

  return (
    <Grid className={classes.drawer}>
      {/* Popular items column */}
      <Grid.Col span={3}>
        <h4>Popular items</h4>
        <Stack>{drawerItems}</Stack>
      </Grid.Col>
      {/* New items column */}
      <Grid.Col span={3}>
        <h4>New items</h4>
        <Stack>{drawerItems}</Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Drawer;
