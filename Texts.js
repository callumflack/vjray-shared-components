import styled, { css } from 'styled-components'
import Rebass from 'rebass'
import { weight, family, lineHeight, letterSpacing } from './utils'
import theme from '../theme-new'


const Root = styled(Rebass.Text)`
  ${family}
  ${weight}
  ${lineHeight}
  ${letterSpacing}
  
  ${props => props.noUnderline && css`
    a { background-image: initial; }
  `}
`

// Rebass uses: 
// * <Heading />
// * <Subhead />
// * <Lead /> 
// * <Small />
// 
// Our API:
// * Text
// * SmallText
// * MediumText
// * LargeText
// * AuthorText

const Text = props =>
  <Root
    fontSize={[ 2, 2, 2, 3 ]}
    weight={2}
    {...props}
  />

const SmallText = props =>
  <Root
    fontSize={[ 1, 1, 2 ]}
    weight={2}
    {...props}
  />

const MediumText = props =>
  <Root
    fontSize={[ 3, 3, 4 ]}
    weight={2}
    {...props}
  />

const LargeText = props =>
  <Root
    fontSize={[ 3, 3, 4, 5 ]}
    weight={2}
    lh='subheadline'
    ls='text'
    {...props}
  />

const AuthorText = props =>
  <Root
    is='span'
    caps
    color='inherit'
    fontSize={[ 2, 2, 2, 3 ]}
    family='textBook'
    weight={3}
    ls='touch'
    {...props}
  />

const Divider = styled.span`
  --spacing: 0.75rem;
  color: inherit;
  margin-left: var(--spacing);
  margin-right: var(--spacing);

  :after {
    color: inherit;
    content: '•';
  }
`;

// 
// Markdown Text blocks
// Find another way…
// 

const TextBlock = styled("div")`
  h1 {
    font-family: ${theme.families.displayRegular};
    font-size: ${theme.fontSizes[5]}px;
    line-height: ${theme.lineHeights.display};
    margin-bottom: ${theme.space[2]}px;

    @media (min-width: ${theme.breakpoints[0]}em) {
      margin-top: ${theme.space[1]}px;
    }

    @media (min-width: ${theme.breakpoints[2]}em) {
      font-size: ${theme.fontSizes[6]}px;
    }

    @media (min-width: ${theme.breakpoints[2]}em) {
      margin-bottom: ${theme.space[3]}px;
    }
  }

  h2 {
    font-family: ${theme.families.displayRegular};
    font-size: ${theme.fontSizes[3]}px;
    letterspacing: ${theme.letterSpacings.text};
    line-height: ${theme.lineHeights.subheadline};
    margin-bottom: ${theme.space[1]}px;

    @media (min-width: ${theme.breakpoints[2]}em) {
      font-size: ${theme.fontSizes[4]}px;
    }

    @media (min-width: ${theme.breakpoints[3]}em) {
      font-size: ${theme.fontSizes[5]}px;
    }
  }

  p,
  li {
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${theme.families.textLight};
    margin: 0;
    order: initial;
    padding: 0;
    width: 100%;

    @media (min-width: ${theme.breakpoints[1]}em) {
      font-size: ${theme.fontSizes[3]}px;
    }
  }

  p + p,
  p + h2,
  ul + p {
    margin-top: 2em;
  }

  ul {
    margin: 2em 0;
  }

  li {
    list-style-type: disc;
    margin-left: 1em;
    padding-left: 8px;
    width: auto;
  }
`;

const DangerouslyResetTextBlock = styled(TextBlock)`
  > div,
  > div div {
    font-size: 16px;
    font-family: ${theme.families.textLight};
    margin: 0;
    order: initial;
    padding: 0;
    width: 100%;

    @media (min-width: ${theme.breakpoints[1]}em) {
      font-size: 19px;
    }
  }
`

export {
  Text,
  LargeText,
  MediumText,
  SmallText,
  AuthorText,
  Divider,
  TextBlock,
  DangerouslyResetTextBlock
}