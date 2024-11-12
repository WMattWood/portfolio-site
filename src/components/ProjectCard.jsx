import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import styled from "styled-components";
import { micromark } from "micromark";

const ProjectCard = ({ name }) => {
    const { accessToken } = useContext(GlobalContext);
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                query: `query { repository(owner: "wmattwood", name: "${name}") {
                                    openGraphImageUrl,
                                    url,
                                    object(expression: "main:README.md") {
                                        ... on Blob {
                                            text
                                        }
                                    }
                                }
                            }`,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                const md = micromark(res.data.repository.object.text);
                const doc = new DOMParser().parseFromString(md, "text/html");
                const githubUrl = res.data.repository.url;
                const liveUrl = doc.querySelectorAll("a")[0]
                    ? doc.querySelectorAll("a")[0].href
                    : githubUrl;

                setProjectData({
                    title: doc.querySelectorAll("h1")[0].textContent,
                    image: res.data.repository.openGraphImageUrl,
                    blurb:
                        doc
                            .querySelectorAll("p")[0]
                            .textContent.substring(0, 250) + "...",
                    link: liveUrl,
                    github: githubUrl,
                });
            });
    }, []);

    return (
        <Card>
            {!projectData ? (
                <p>"loading"</p>
            ) : (
                <>
                    <TextBox>
                        <TitleBox>
                            <Title>{projectData.title}</Title>
                        </TitleBox>
                        <InfoBox>
                            <InfoBlurb>{projectData.blurb}</InfoBlurb>
                        </InfoBox>
                        <a href={projectData.github}>View Code on Github</a>
                    </TextBox>
                    <ImageBox href={projectData.link}>
                        <Image src={projectData.image} />
                    </ImageBox>
                </>
            )}
        </Card>
    );
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
    margin-bottom: 50px;
    border-radius: 5px;

    @media (min-width: 840px) {
        flex-direction: row;
    }

    * {
        color: var(--text);
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
    width: 90%;

    @media (min-width: 840px) {
        width: 60%;
    }
`;

const InfoBox = styled.div`
    display: flex;
`;

const InfoBlurb = styled.p`
    font-size: 18px;
`;

const ImageBox = styled.a`
    box-sizing: border-box;
`;

const Image = styled.img`
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 5px;
    transition: 0.1s;

    :hover {
        cursor: pointer;
    }
`;

const TitleBox = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: start;
`;

const Title = styled.h3`
    font-size: 22px;
    margin-bottom: 12px;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 500px) {
        font-size: 1.8em;
    }
`;

export default ProjectCard;
