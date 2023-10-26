import React from "react";
import { Decorator, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router";

export const MemoryRouterDecorator: Decorator = (Story: StoryFn) => {
    return (
        <MemoryRouter initialEntries={['/']}>
            <Story />
        </MemoryRouter>)
}