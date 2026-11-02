import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders portfolio sections and verified project links", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /building digital experiences, one line of code at a time/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /built with purpose/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Modern Academy in Maadi/)).not.toHaveLength(0);
  expect(screen.getAllByText(/participation not confirmed/i)).toHaveLength(2);
  expect(screen.queryByText(/Classroom Frontend/i)).not.toBeInTheDocument();

  const projectLink = screen.getAllByRole("link", { name: /source/i })[0];
  expect(projectLink).toHaveAttribute("href", "https://github.com/XKenda/AI-SaaS");
  expect(within(screen.getByRole("contentinfo")).getByText(/Designed and developed/i))
    .toBeInTheDocument();

  expect(screen.getByRole("heading", { name: "E-Commerce Application" })).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /live site/i }).some(
      (link) => link.getAttribute("href") === "https://xkenda.github.io/e_commerce/"
    )
  ).toBe(true);
  expect(
    screen.getAllByRole("link", { name: /source/i }).some(
      (link) => link.getAttribute("href") === "https://github.com/XKenda/e_commerce"
    )
  ).toBe(true);
  expect(screen.getByRole("link", { name: /view all certificates/i })).toHaveAttribute(
    "href",
    "https://drive.google.com/drive/folders/14rup8yHCWtIRWNeWgdcLHv8NAyu9vFD0?usp=drive_link"
  );
  expect(screen.getByRole("link", { name: /view all certificates/i })).toHaveAttribute(
    "rel",
    "noopener noreferrer"
  );
  expect(screen.getByRole("heading", {
    name: "Front-End Web Development Diploma (React.js)",
  })).toBeInTheDocument();
  expect(screen.getByRole("heading", {
    name: "Back-End Web Development Diploma (Node.js)",
  })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "React Web Design Training" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Digital Marketing Certification" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Inbound Sales Certification" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Basics of Pricing" })).toBeInTheDocument();
  expect(screen.getAllByText("SOLID Principles")).toHaveLength(1);
});
