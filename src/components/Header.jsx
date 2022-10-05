import { createStyles, Header, Autocomplete, Group, Button, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";
import SearchBar from "./SearchBar";
import { IconShoppingCart } from "@tabler/icons";

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
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
      alignItems: "center"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
    }
  }
}));

function HeaderBar() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  //   const items = links.map((link) => (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={classes.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </a>
  //   ));
  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <h1>eazyshop</h1>

          <SearchBar />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {/* {items} */}

            <ActionIcon>
      <IconShoppingCart size={18} />
    </ActionIcon>

            <Button variant="subtle" radius="lg">
              Login
            </Button> 
          </Group>
        </Group>
      </div>
    </Header>
  );
}

export default HeaderBar;
