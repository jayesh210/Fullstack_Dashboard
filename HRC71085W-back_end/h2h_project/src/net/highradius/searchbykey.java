package net.highradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import net.highradius.UserDao;

/**
 * Servlet implementation class searchbykey
 */
@WebServlet("/searchbykey")
public class searchbykey extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userDAO;

    public void init() {
        userDAO = new UserDao();
    }  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public searchbykey() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "*");
		PrintWriter out=response.getWriter();
		String doc_id=request.getParameter("doc_id"); 
		String invoice_id=request.getParameter("invoice_id");
		String cust_number=request.getParameter("cust_number"); 
		String buisness_year=request.getParameter("buisness_year");
		
		User n = new User();
		n.setDoc_id(doc_id);
		n.setInvoice_id(invoice_id);
	    n.setCust_number(cust_number);
	    n.setBuisness_year(buisness_year);
	    
	   
	    List < User > listUser = UserDao.getNameById( n);
	    System.out.print(listUser);
	    Gson gson = new Gson();
		String resData = gson.toJson(listUser);
		
		response.getWriter().append(resData);
		out.print(resData);
		System.out.print("Successfully checked");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
