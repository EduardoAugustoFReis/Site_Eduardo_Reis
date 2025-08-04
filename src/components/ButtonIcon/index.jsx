import { ButtonContainer } from "./styles";

// eslint-disable-next-line react/prop-types
export default function ButtonIcon({icon: Icon, ariaLabel, ...rest}) {
  return (
    <ButtonContainer aria-label={ariaLabel} {...rest}>
      {Icon && <Icon/>}
    </ButtonContainer>
  )
}
