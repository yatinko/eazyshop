import { createStyles, Container, Group, Anchor } from "@mantine/core";

// Style for the Footer component.
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column"
    }
  }
}));

// Footer Links Objects.
const links = [{ label: "Source Code", link: "https://github.com/yatinko/eazyshop" }];

// Footer Component Definition.
const Footer = () => {
  const { classes } = useStyles();

  // Mapping Footer links.
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* Brand Logo */}
        <h1>eazyshop</h1>
        <Group>{items}</Group>
      </Container>
    </div>
  );
};

export default Footer;
