export const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    cardIntro:
      "A modern and responsive e-commerce platform with a seamless user experience.",
    systemImage: "projects/e-com-site/e-com.png",
    introduction: {
      description:
        "This e-commerce platform is a comprehensive solution built using Next.js, designed to deliver seamless management and shopping experiences for both administrators and customers.",
      admin: [
        "Add and manage products and collections.",
        "Access a dashboard that displays a summary of the total products, customers, and collections.",
        "Analyze monthly sales trends through a detailed graph.",
        "View and manage customer orders efficiently.",
        "User authentication and management are securely handled using <a style='color: blue; text-decoration: underline;' href='https://www.clerk.com'>Clerk</a>.",
      ],
      client: [
        "Browse through products and collections.",
        "Add items to their cart and complete purchases using Stripe for secure payments.",
        "Maintain a wishlist for their favorite products.",
        "View their order history and track purchased items.",
      ],
      backend: [],
    },
    pages: {
      admin: [
        {
          title: "Admin Dashboard Page",
          images: [
            {
              url: "projects/e-com-site/admin/dashboard/1.png",
              description:
                "The <b>dashboard</b> provides a concise overview of key performance metrics, offering a clear snapshot of the platform's activity and success. It displays the total revenue generated, the total number of orders processed, and the total customers engaged, enabling quick assessment of financial and operational performance. Additionally, a sales chart visually represents monthly revenue trends throughout the year, helping administrators track progress and identify patterns. This streamlined interface ensures that essential business insights are accessible at a glance for effective decision-making.",
            },
          ],
        },
        {
          title: "Collection Page",
          images: [
            {
              url: "projects/e-com-site/admin/collection/1.png",
              description:
                "The <b>Collections Page</b> allows administrators to manage product collections efficiently. It displays a searchable and paginated table of collections, listing the Title of each collection and the corresponding number of products included. Administrators can easily create new collections using the Create Collection button located at the top right. Each collection row also features a delete button, enabling administrators to quickly remove unwanted collections. The pagination controls at the bottom of the table allow for seamless navigation through the list of collections, ensuring an intuitive and organized interface for managing product categories.",
            },
            {
              url: "projects/e-com-site/admin/collection/2.png",
              description:
                "The <b>Create Collection Page</b> allows administrators to add new product collections to the platform. It provides input fields for the Title and Description of the collection, enabling clear and concise categorization.Additionally, administrators can upload an Image to visually represent the collection, enhancing its appeal. The page is designed to simplify the process of creating and managing collections, ensuring that administrators can efficiently organize products while maintaining a professional and visually engaging interface.",
            },
          ],
        },
        {
          title: "Products Page",
          images: [
            {
              url: "projects/e-com-site/admin/product/1.png",
              description:
                "The <b>Products Page</b> provides an organized interface for managing product listings within the e-commerce platform. It displays a searchable and paginated table that includes key details about each product, such as the <b>Title</b>, <b>Category</b>, <b>Collections</b>, <b>Price</b>, and <b>Expense</b>. The page also features a <b>Create Product</b> button that allows administrators to add new products seamlessly. For efficient product management, a delete button is included next to each product, enabling quick removal of outdated or unwanted items.",
            },
            {
              url: "projects/e-com-site/admin/product/2.png",
              description:
                "The <b>Create Product Page</b> is a comprehensive form designed to streamline the process of adding new products. Administrators can input product details such as the <b>Title</b>, <b>Description</b>, <b>Price</b>, <b>Expense</b>, and <b>Category</b>. Additionally, multiple <b>Images</b> can be uploaded to visually represent the product. The page also includes fields for assigning <b>Tags</b>, <b>Collections</b>, <b>Sizes</b>, and <b>Colors</b>, ensuring detailed categorization and better organization. With intuitive buttons for submitting or discarding changes, the page simplifies product creation and management, making it efficient and user-friendly.",
            },
          ],
        },
        {
          title: "Orders Page",
          images: [
            {
              url: "projects/e-com-site/admin/order/1.png",
              description:
                "The <b>Orders Page</b> provides administrators with a streamlined interface to manage customer orders efficiently. It displays a searchable and paginated table containing key order details such as the <b>Order ID</b>, <b>Customer Name</b>, <b>Number of Products</b>, <b>Total Amount</b>, and the <b>Date of Creation</b>. This organized layout allows quick access to essential order information, enabling seamless tracking and management of the e-commerce platform's transactions.",
            },
          ],
        },
        {
          title: "Customers Page",
          images: [
            {
              url: "projects/e-com-site/admin/customers/1.png",
              description:
                "The <b>Customers Page</b> offers a centralized hub for managing customer data. It presents a searchable and paginated table listing customer details such as the <b>Clerk ID</b>, <b>Customer Name</b>, and <b>Email Address</b>. This page facilitates efficient customer data handling and provides a clear overview of registered users on the platform, ensuring streamlined user management.",
            },
          ],
        },
        {
          title: "Profile Management",
          images: [
            {
              url: "projects/e-com-site/admin/profile/1.png",
              description:
                "The <b>Profile Management Page</b> allows users to view and update their account details. Users can modify their <b>Profile Name</b>, <b>Email Address</b>, and <b>Connected Accounts</b>. Additionally, it includes a section for updating the <b>Password</b> and managing <b>Active Devices</b>. A convenient <b>Delete Account</b> option is also provided for users who wish to deactivate their profiles. This page ensures a secure and user-friendly experience for managing personal information.",
            },
            {
              url: "projects/e-com-site/admin/profile/2.png",
              description: "",
            },
            {
              url: "projects/e-com-site/admin/profile/3.png",
              description: "",
            },
          ],
        },
      ],
      client: [
        {
          title: "Home Page",
          images: [
            {
              alt: "home",
              url: "projects/e-com-site/store/home/1.png",
              description:
                "The <b>Home Page</b> serves as the entry point for the e-commerce platform. It features a visually engaging banner promoting new fashion items with a <b>40% discount</b>, inviting customers to explore the latest deals. Below the banner, the <b>Collections</b> section highlights curated product categories, such as clothing and accessories, for easy navigation. The <b>Products</b> section showcases individual items with their <b>price</b> and <b>category</b>, enabling users to browse the catalog quickly.",
            },
          ],
        },
        {
          title: "Product Details Page",
          images: [
            {
              url: "projects/e-com-site/store/product/1.png",
              description:
                "The <b>Product Details Page</b> provides a comprehensive view of an individual product. It features a large product image gallery to showcase multiple angles, alongside detailed product information such as the <b>Title</b>, <b>Category</b>, <b>Price</b>, and <b>Description</b>. Customers can select available <b>Colors</b> and <b>Sizes</b>, adjust the <b>Quantity</b>, and add the item to their cart. The page also displays a 'Related Products' section at the bottom, helping users discover similar items to enhance their shopping experience.",
            },
          ],
        },
        {
          title: "Wishlist Page",
          images: [
            {
              url: "projects/e-com-site/store/wishlist/1.png",
              description:
                "The <b>Wishlist Page</b> allows users to save and manage their favorite products for future reference. It displays each product's <b>Image</b>, <b>Title</b>, <b>Category</b>, and <b>Price</b>. Users can easily add these items to their shopping cart or continue browsing. The page provides a streamlined experience for organizing desired products and keeping them accessible.",
            },
          ],
        },
        {
          title: "Orders Page",
          images: [
            {
              url: "projects/e-com-site/store/order/1.png",
              description:
                "The <b>Orders Page</b> provides users with an organized view of their past purchases. It displays a list of orders with key details such as the <b>Order ID</b>, <b>Total Amount</b>, and individual product information, including the <b>Title</b>, <b>Color</b>, <b>Size</b>, <b>Unit Price</b>, and <b>Quantity</b>. This page helps users efficiently track and manage their purchase history.",
            },
          ],
        },
        {
          title: "Shopping Cart Page",
          images: [
            {
              url: "projects/e-com-site/store/cart/1.png",
              description:
                "The <b>Shopping Cart Page</b> provides users with a clear and organized view of their selected items. It displays product details such as the <b>Image</b>, <b>Title</b>, <b>Color</b>, <b>Size</b>, <b>Price</b>, and <b>Quantity</b>. Users can increase or decrease the quantity of items, remove products from the cart, and view the total amount in the <b>Summary</b> section. A 'Proceed to Checkout' button enables users to initiate the purchase process conveniently.",
            },
          ],
        },
        {
          title: "Payment Pages",
          images: [
            {
              url: "projects/e-com-site/store/payment/1.png",
              description:
                "The <b>Payment Form Page</b> allows users to securely enter their <b>Shipping Information</b> and <b>Payment Details</b>. It includes input fields for email, shipping address, and credit card details. The page is designed with simplicity and security in mind, providing users with a seamless checkout experience.",
            },

            {
              url: "projects/e-com-site/store/payment/1.png",
              description:
                "The <b>Payment Success Page</b> confirms the successful completion of a transaction. It displays a thank-you message and provides an option to <b>Continue Shopping</b>. This page ensures users are notified of their completed purchase and are encouraged to browse further.",
            },
            {
              url: "projects/e-com-site/store/payment/3.png",
              description:
                "The <b>Payment Summary Page</b> provides a detailed overview of the user's payment and transaction details. It includes the <b>Order Summary</b>, <b>Checkout Timeline</b>, <b>Customer Information</b>, and <b>Payment Breakdown</b>. Key details like the total amount, items purchased, and payment method are displayed for easy review. This page ensures transparency and clarity in the transaction process.",
            },
          ],
        },
        {
          title: "User Profile Page",
          images: [
            {
              url: "projects/e-com-site/store/profile/1.png",
              description:
                "The <b>User Management Page</b> provides administrators with an organized interface to manage platform users. It includes a <b>searchable</b> and <b>sortable table</b> displaying user details such as <b>name</b>, <b>email</b>, <b>last signed in date</b>, and <b>date joined</b>. Administrators can also <b>invite new users</b> or <b>create users</b> with the button provided. This page ensures seamless management of user accounts and roles for platform operations.",
            },
          ],
        },
      ],
      backend: [],
    },
  },
];
