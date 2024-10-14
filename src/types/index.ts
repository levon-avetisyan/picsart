export interface IPhoto {
  id: number;
  alt: string;
  src: {
    original: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  width: number;
  height: number;
}

export interface IUnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  src?: {
    medium: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  categories: unknown[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: {
    id: number;
    title: string;
    published_at: string;
    updated_at: string;
    curated: boolean;
    featured: boolean;
    total_photos: number;
    private: boolean;
    share_key: string;
    cover_photo: {
      id: string;
      urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
      };
    } | null;
  }[]; // Array of collections the user has added photo to
  sponsorship: {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
  } | null;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
  };
  photographer?: string;
  alt?: string;
}
