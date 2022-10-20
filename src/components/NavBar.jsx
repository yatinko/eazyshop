import { useState, useMemo } from "react";
import { Anchor, Popover, Divider, Container, useMantineTheme, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Drawer from "./Drawer";
import { data, categories } from "../data/NavBarCategories";

// Creating styles for the Navbar.
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    flex: "start",
    margin: "unset",
    paddingTop: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },
  linkItem: {
    marginInline: "1.5em",
    ...theme.fn.hover({ color: theme.colors.black, textDecoration: "unset" })
  },
  activeLink: {
    color: location.pathname == "/" ? theme.colors.black : theme.colors.brand,
    fontWeight: location.pathname == "/" ? "bold" : "none",
    marginInline: "1.5em",
    ...theme.fn.hover({ color: theme.colors.black, textDecoration: "unset" })
  },
  drawerClose: {
    display: "none"
  },
  drawerOpen: {
    zIndex: "100000"
  }
}));

// Navbar component definition.
const NavBar = () => {
  // Disclosure hook used for managing the display state of the
  // Navugation drawer.
  const [opened, handler] = useDisclosure(false);

  // State hook for managing the state of the hovered nav link.
  const [category, setCategory] = useState("");

  // Dynamically rendering and memoizing the hovered nav links.
  const navData = useMemo(() => {
    return data.filter((item) => item.type === category);
  }, [category]);

  // Modifier functions for when hovering the nav link element.
  const handleMouseEnter = (e) => {
    setCategory(e.target.innerText);

    handler.open();
  };

  const handleMouseLeave = () => {
    handler.close();
  };

  // Theme object.
  const theme = useMantineTheme();
  const { classes } = useStyles();

  // Mapping anchor tags for the categories nav links.
  const linkItems = categories.map((item) => (
    <Popover.Target key={item}>
      <Anchor
        color={theme.colors.brand}
        href="#"
        className={classes.linkItem}
        onClick={(event) => event.preventDefault()}
        size="md"
        onMouseEnter={handleMouseEnter}
      >
        {item}
      </Anchor>
    </Popover.Target>
  ));

  return (
    <>
      <Popover width={"100%"} trapFocus position="bottom" withArrow shadow="md" opened={opened}>
        {/* Navigation Bar */}
        <Container className={classes.inner}>
          <Anchor color={theme.colors.brand} href="/" className={classes.activeLink} size="md">
            Home
          </Anchor>
          <Divider orientation="vertical" />
          <div>{linkItems}</div>
        </Container>
        <Divider my="md" />
        {/* Dropdown */}
        <Popover.Dropdown onMouseLeave={handleMouseLeave}>
          <Drawer links={navData} />
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default NavBar;
