import styled from 'styled-components'

export const Experience = styled.div`
	display: flex;
    margin: 50px 0;
    align-items: center;
    @media (max-width: 870px) {
		flex-direction: column;
	}
`
export const InfoSection = styled.div`
	border-right: solid thin ${props => props.theme.secondary};
	text-align: right;
    flex-basis: 320px;
    padding-right: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    @media (max-width: 870px) {
        flex-basis: initial;
        border-right: none;
        border-bottom: solid thin ${props => props.theme.secondary};
        width: 100%;
        text-align: left;
	}
`
export const DetailsSection = styled.div`
    flex-grow: 1;
	padding-left: 10px;
    @media (max-width: 870px) {
        margin-top: 8px;
        padding: 0;
    }
`
export const DetailsParagraph = styled.p`
    font-size: 1.3em;
    margin: 0;
`

export const CompanyName = styled.h3`
    margin: 4px 0;
    @media (max-width: 870px) {
        margin: 2px 0;
    }
`
export const Position = styled.h4`
    margin: 4px 0;
    @media (max-width: 870px) {
        margin: 0;
        float: left;
        line-height: 1.5em;
    }
`
export const TimeSpan = styled.h5`
    margin: 2px 0;
    @media (max-width: 870px) {
        margin: 0;
        float: right;
        line-height: 1.5em;
    }
`