import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Us Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    About MakeMyTrip
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Investor Relations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Corporate Travel
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Customer Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Flights
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Hotels
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Holiday Packages
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* More Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">More</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Travel Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    PNR Status
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Offers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media and App Links */}
                <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-2xl hover:text-gray-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-2xl hover:text-gray-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-2xl hover:text-gray-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-2xl hover:text-gray-300">
                            <FaYoutube />
                        </a>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">
                            <FaApple className="mr-2" /> App Store
                        </a>
                        <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">
                            <FaGooglePlay className="mr-2" /> Google Play
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} MakeMyTrip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

