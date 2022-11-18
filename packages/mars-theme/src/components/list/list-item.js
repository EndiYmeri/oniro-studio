import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {

  const media= state.source.attachment[item.featured_media];

  return (
      <ArticleComp>
        <StyledLink link={item.link} >
            <ImgComp src={item.acf.cat_image || media.source_url} />
            <h1>{item.name || item.title.rendered}</h1>
        </StyledLink>
      </ArticleComp>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

  const ArticleComp = styled.article`
    padding: 121px 10px;
    text-align: center;
    /* use instead of border */
    border-bottom: 1px solid black;
    :nth-of-type(3n-1){
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  `
  const StyledLink = styled(Link)`
    cursor: pointer;
  `;

  const ImgComp = styled.img`
  max-width: 100%;
  `

