import { storyblokEditable } from "@storyblok/react";

const BannerItemList = ({ blok }) => {
  return (
    <ul
      className="mx-auto w-full flex flex-col items-center"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      {blok.banner_items.map((item) => {
        return (
          <li
            key={item.slug}
            className="max-w-4xl w-full px-10 my-4 py-6 rounded-lg shadow-md bg-white"
          >
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600">
                {`
                    ${new Date(item.created_at).getDay()}.
                    ${new Date(item.created_at).getMonth()}.
                    ${new Date(item.created_at).getFullYear()}`}
              </span>
            </div>
            <div className="mt-2">
              <a
                className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                href={`/blog/${item.slug}`}
              >
                {item.content.title}
              </a>
              <p className="mt-2 text-gray-600">{item.content.banner_button_label}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                className="text-blue-600 hover:underline"
                href={`/blog/${item.slug}`}
              >
                Read more
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BannerItemList;
