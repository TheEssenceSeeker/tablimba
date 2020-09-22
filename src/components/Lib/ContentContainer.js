import styled from 'styled-components'
import Container from "./Container"
import {FOOTER_HEIGHT, HEADER_HEIGHT} from "../styled/global"

const ContentContainer = styled(Container)`
  margin-top: ${HEADER_HEIGHT};
  margin-bottom: ${FOOTER_HEIGHT}; 
`

export default ContentContainer

