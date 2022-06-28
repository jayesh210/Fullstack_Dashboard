package net.highradius;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class delete
 */
@WebServlet("/delete")
public class delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userDAO;

    public void init() {
        userDAO = new UserDao();
    }  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		boolean Response;
		response.setHeader("Access-Control-Allow-Origin", "*");
		String sid=request.getParameter("sl_no");
		int id=Integer.parseInt(sid);
    	int status=UserDao.delete(id);
    	if(status>0) {
     	   Response=true;
        }
        else {
     	   Response=false;
        }
        Gson gson=new Gson();
        String JSONRresponse=gson.toJson(Response);
        response.getWriter().append(JSONRresponse);
    	System.out.print("Successfully Deleted");
	}

}
