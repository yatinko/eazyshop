import { createStyles, Header, Group, Button, ActionIcon } from "@mantine/core";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { IconShoppingCart } from "@tabler/icons";

// Styles foe the Header component.
const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

// Header Component Definition.
const HeaderBar = () => {
  const { classes } = useStyles();
  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          {/* Brand Logo */}
          <h1>eazyshop</h1>
          <SearchBar />
        </Group>

        {/* User Actions (Navigation) */}
        <Group>
          <Group ml={50} spacing={5}>
            <ActionIcon>
              <IconShoppingCart size={18} />
            </ActionIcon>
            <Button variant="subtle" radius="lg">
              Login
            </Button>
          </Group>
        </Group>
      </div>
      <NavBar />
    </Header>
  );
};

export default HeaderBar;
