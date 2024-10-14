const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin'); // For Gzip
const BrotliPlugin = require('brotli-webpack-plugin'); // For Brotli compression

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Cache busting via content hash
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs
          },
          output: {
            comments: false, // Remove comments from the code
          },
        },
      }),
      new CssMinimizerPlugin(), // Minify CSS
    ],
    splitChunks: {
      chunks: 'all', // Apply code splitting to all chunks
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single', // Separate runtime into a chunk for caching
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // Inline images smaller than 10kb
          },
        },
        generator: {
          filename: 'images/[name].[hash][ext]', // Cache busting for images
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]', // Cache busting for fonts
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
      },
      inject: true,
      scriptLoading: 'defer',
      preload: {
        rel: 'preload',
        as: 'image',
        href: '/path/to/lcp-image.jpg', // Preload LCP image (update with the actual path)
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Cache busting for CSS
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // Define production environment
    }),
    new CompressionPlugin({
      filename: '[path][base].gz', // Enable Gzip Compression
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/, // Compress JavaScript, CSS, HTML, SVG
      threshold: 8192, // Only compress files larger than 8kb
      minRatio: 0.8, // Only compress if the compression ratio is > 0.8
    }),
    new BrotliPlugin({
      asset: '[path].br[query]', // Enable Brotli Compression
      test: /\.(js|css|html|svg)$/, // Compress JavaScript, CSS, HTML, SVG
      threshold: 10240, // Only compress files larger than 10kb
      minRatio: 0.8,
    }),
  ],
};
