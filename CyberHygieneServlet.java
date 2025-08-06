import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CyberHygieneServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        int passwordDays = Integer.parseInt(request.getParameter("passwordChange"));
        String twoFA = request.getParameter("twoFA");

        int score = 0;
        if (passwordDays <= 30) score++;
        if ("yes".equalsIgnoreCase(twoFA)) score++;

        // Save to JSON file
        FileWriter file = new FileWriter("data/users.json", true);
        file.write("{\"username\":\"" + username + "\", \"score\":" + score + "},\n");
        file.close();

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h3>Cyber Hygiene Score for " + username + ": " + score + "/2</h3>");
    }
}
