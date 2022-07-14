import styled from "styled-components";

export const Aside = styled.aside`
	background: ${(props) => props.theme.colors.backgroundAside};
	width: 12rem;
	height: 100vh;
	position: fixed;
    left: 0;
	top: 0rem;
	padding: 6rem 1rem 0rem 1rem;
	display: flex;
	flex-direction: column;
`;

export const Nav = styled.nav`
	color: ${(props) => props.theme.colors.textColorTitle};
	margin-top: 3rem;
`;

export const NavItens = styled.div`
	h4 {
		margin-bottom: 1rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;

		.item-coming-soon {
			display: flex;
			align-items: center;


			button {
				opacity: 0.5;
			}
		}
	}
`;

export const AsideFooter = styled.div`
	position: absolute;
	bottom: 7rem;
`;
