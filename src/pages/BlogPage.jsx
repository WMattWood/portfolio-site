import styled from "styled-components";
import { useContext, useEffect, useId } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import BlogCardFull from "../components/BlogCardFull";
import { GlobalContext } from "../GlobalContext";

function BlogPage() {
    const { blogs } = useContext(GlobalContext);

    // Manage direct scroll to hash id on page load
    const { pathname, hash, key } = useLocation();
    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === "") {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    // element.scrollIntoView({behaviour: "smooth"});
                    window.scrollTo({
                        behavior: element ? "smooth" : "auto",
                        top: element ? element.offsetTop - 40 : 0,
                    });
                }
            }, 500);
        }
    }, [pathname, hash, key]); // do this on route change

    return (
        <div>
            <Navbar />
            <Body>
                <Contents>
                    <TitleBox>
                        <SectionTitle>My Blog</SectionTitle>
                    </TitleBox>
                    {!blogs ? (
                        <p>"Loading"</p>
                    ) : (
                        <BlogBox>
                            {blogs.map((blog) => (
                                <BlogCardFull key={useId()} blog={blog} />
                            ))}
                        </BlogBox>
                    )}
                </Contents>
            </Body>
            <Footer></Footer>
        </div>
    );
}

// STRUCTURE
const Body = styled.div`
    background: var(--secondary);
    padding-bottom: 12px;
`;

const Contents = styled.div`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Footer = styled.div`
    height: 200px;
    background: var(--secondary);
`;

// ELEMENTS
const BlogBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleBox = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 24px;
`;

const SectionTitle = styled.h3``;

export default BlogPage;
