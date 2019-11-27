
const space = {
    name: "space",
    fonts: {
        primary:
            '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        code:
            '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    colors: {
        grey1: '#2a2a2a',
        grey2: '#5D5D5D',
        grey3: '#7a7a7a',
        gray4: '#FAFAFA',
        white: '#fff',
    }
};

const bossy = {
    name: "bossy",
    fonts: {
        primary:
            '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        code:
            '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    colors: {
        grey1: '#2a2a2a',
        grey2: '#5D5D5D',
        grey3: '#7a7a7a',
        gray4: '#FAFAFA',
        white: '#fff',
    }
};

const pharmacy = {
    name: "pharmacy",
    fonts: {
        primary:
            '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        code:
            '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    colors: {
        grey1: '#2a2a2a',
        grey2: '#5D5D5D',
        grey3: '#7a7a7a',
        gray4: '#FAFAFA',
        white: '#fff',
    }

}

export const themes = {
	...pharmacy,
	...bossy,
	...space,
};
