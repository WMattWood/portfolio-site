import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
    const navigate = useNavigate();

    return (
        <Card>
            <Title>{blog.title}</Title>
            <Link onClick={() => navigate(`/blog#${blog.id}`)}>
                <Text>
                    <BlogPreview>
                        {blog.content.substring(0, 300).trim() + "..."}
                    </BlogPreview>
                </Text>
            </Link>
        </Card>
    );
}

const Card = styled.div`
    min-width: 25%;
    margin-bottom: 40px;
    margin-right: 24px;
`;

const Title = styled.h4`
    font-size: 22px;
    margin-bottom: 12px;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
`;

const Text = styled.div`
    cursor: pointer;
    padding: 12px;
    background: var(--text);
    border-radius: 5px;
    transition: 0.1s;

    * {
        color: var(--primary);
        font-weight: 500;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
    }

    :hover {
        transition: 0.1s;
        transform: translateX(2px);
        background-color: var(--text);
        box-sizing: content;
    }
`;

const BlogPreview = styled.p`
    width: 100%;
`;

const Link = styled.a`
    text-decoration: none;
`;

export default BlogCard;
