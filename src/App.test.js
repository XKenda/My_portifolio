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
  expect(screen.queryByText(/Job-tracking/i)).not.toBeInTheDocument();

  const projectLink = screen.getAllByRole("link", { name: /source/i })[0];
  expect(projectLink).toHaveAttribute("href", "https://github.com/XKenda/AI-SaaS");
  expect(within(screen.getByRole("contentinfo")).getByText(/Designed and developed/i))
    .toBeInTheDocument();
});
