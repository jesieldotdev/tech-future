import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  


.card {

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
}

.card-img-top {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
}



.card-title {


    font-family: 'Noto Sans', sans-serif;
}

.date {
    font-size: 0.9rem;
    color: #666;
}
`