import React, { useState } from "react";

const Contact = () => {
  const CONTACT_EMAIL = "tranduonghuuxuan22@gmail.com";
  const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim()) return "Vui lòng nhập họ và tên.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      return "Vui lòng nhập email hợp lệ.";
    if (!form.message.trim()) return "Vui lòng nhập nội dung.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setStatus("sending");

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
          }),
        });
        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          setForm({ name: "", email: "", phone: "", message: "" });
        } else {
          setStatus("error");
          setError(data.error || "Gửi thất bại, thử lại sau.");
        }
      } catch (err) {
        setStatus("error");
        setError("Lỗi mạng. Vui lòng thử lại.");
      }
      return;
    }

    // Fallback: open mail client
    const subject = encodeURIComponent(`Liên hệ từ ${form.name}`);
    const body = encodeURIComponent(
      `Tên: ${form.name}\nEmail: ${form.email}\nSĐT: ${
        form.phone || "-"
      }\n\nNội dung:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <section
      className="w-full py-16 bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295]"
      aria-labelledby="contact-heading"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="border border-[#2C74B3] rounded-xl p-8 md:p-10 backdrop-blur-sm bg-[rgba(13,40,70,0.7)]"
          style={{
            boxShadow: "0 15px 35px rgba(0, 30, 60, 0.6)",
          }}
        >
          <div className="mb-10 text-left">
            <h2
              id="contact-heading"
              className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-[#4CC9F0] to-[#4361EE] bg-clip-text text-transparent"
            >
              Liên hệ với tôi
            </h2>
            <p className="text-[#B6E1FF] text-lg">
              Hãy gửi thông tin cho tôi — tôi sẽ phản hồi lại bạn trong thời
              gian sớm nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="text-[#E6F4FF] text-sm block mb-2 font-medium">
                  Họ và tên *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] text-white placeholder-[#9AC8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:border-transparent transition-all"
                  placeholder="Họ và tên"
                  required
                />
              </div>

              <div>
                <label className="text-[#E6F4FF] text-sm block mb-2 font-medium">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] text-white placeholder-[#9AC8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:border-transparent transition-all"
                  placeholder="email@domain.com"
                  required
                />
              </div>

              <div>
                <label className="text-[#E6F4FF] text-sm block mb-2 font-medium">
                  Số điện thoại (tùy chọn)
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] text-white placeholder-[#9AC8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:border-transparent transition-all"
                  placeholder="0123xxxxxxx"
                />
              </div>

              <div>
                <label className="text-[#E6F4FF] text-sm block mb-2 font-medium">
                  Nội dung liên hệ *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] text-white placeholder-[#9AC8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:border-transparent transition-all"
                  placeholder="Viết nội dung..."
                  required
                />
              </div>

              {error && (
                <p className="text-[#FF7D7D] text-sm py-2 bg-[rgba(255,125,125,0.1)] p-2 rounded">
                  {error}
                </p>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:ring-offset-2 focus:ring-offset-[#0A2647] transition-all disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    "Gửi liên hệ"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setForm({ name: "", email: "", phone: "", message: "" })
                  }
                  className="px-5 py-3 border border-[#3A7DAA] text-[#E6F4FF] rounded-lg hover:bg-[rgba(42,109,151,0.5)] transition-colors"
                >
                  Xóa
                </button>

                {status === "success" && (
                  <span className="text-[#6FCF97] text-sm ml-3 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Gửi thành công.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-[#FF7D7D] text-sm ml-3 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Gửi thất bại.
                  </span>
                )}
              </div>
            </form>

            {/* Direct contact info */}
            <div className="space-y-6 text-left">
              <div className="p-6 bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] rounded-xl">
                <h3 className="font-semibold text-white mb-4 text-lg border-b border-[#3A7DAA] pb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#4CC9F0]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Thông tin liên hệ
                </h3>
                <p className="text-[#B6E1FF] mb-4 flex items-start">
                  <span className="inline-block w-16 font-medium">Email:</span>
                  <a
                    className="text-white underline hover:text-[#4CC9F0] transition-colors flex items-center"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="text-[#B6E1FF] mb-4 flex items-start">
                  <span className="inline-block w-16 font-medium">SĐT:</span>
                  <a
                    className="text-white underline hover:text-[#4CC9F0] transition-colors flex items-center"
                    href="tel:+84000000000"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +84 0xxx xxx xxx
                  </a>
                </p>
                <p className="text-[#B6E1FF] flex items-start">
                  <span className="inline-block w-16 font-medium">
                    Đại diện:
                  </span>
                  <span className="text-white flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Trần Dương Hữu Xuân
                  </span>
                </p>
              </div>

              <div className="p-6 bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] rounded-xl">
                <h3 className="font-semibold text-white mb-4 text-lg border-b border-[#3A7DAA] pb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#4CC9F0]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                  Kênh khác
                </h3>
                <ul className="space-y-4">
                  <li className="text-[#B6E1FF] flex items-center">
                    <span className="inline-block w-16 font-medium">
                      GitHub:
                    </span>
                    <a
                      className="text-white underline hover:text-[#4CC9F0] transition-colors flex items-center"
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      github.com/yourusername
                    </a>
                  </li>
                  <li className="text-[#B6E1FF] flex items-center">
                    <span className="inline-block w-16 font-medium">
                      LinkedIn:
                    </span>
                    <a
                      className="text-white underline hover:text-[#4CC9F0] transition-colors flex items-center"
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      linkedin.com/in/yourprofile
                    </a>
                  </li>
                  <li className="text-[#B6E1FF] flex items-center">
                    <span className="inline-block w-16 font-medium">
                      Portfolio:
                    </span>
                    <a
                      className="text-white underline hover:text-[#4CC9F0] transition-colors flex items-center"
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      your-portfolio.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-4 text-sm text-[#B6E1FF] bg-[rgba(42,109,151,0.3)] border border-[#2C74B3] rounded-lg">
                <p className="mb-2">
                  Gợi ý: cấu hình REACT_APP_FORMSPREE_ENDPOINT để gửi thẳng qua
                  Formspree. Nếu không, form sẽ mở mail client mặc định.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
