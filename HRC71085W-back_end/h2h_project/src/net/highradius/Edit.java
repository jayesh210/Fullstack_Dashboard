package net.highradius;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import com.google.gson.Gson;

import net.highradius.UserDao;

/**
 * Servlet implementation class Edit
 */
@WebServlet("/Edit")
public class Edit extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userDAO;

    public void init() {
        userDAO = new UserDao();
    }  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Edit() {
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
		
		response.setHeader("Access-Control-Allow-Origin","*");
		  PrintWriter out=response.getWriter();   
		  String sid=request.getParameter("sl_no");  
	      String invoice_currency=request.getParameter("invoice_currency");  
	      String cust_payment_terms=request.getParameter("cust_payment_terms");
	      User n=new User();
	      n.setSl_no(sid);
	      n.setInvoice_currency(invoice_currency);;  
	      n.setCust_payment_terms(cust_payment_terms);
	      int status=UserDao.update(n);  
	        
	      out.close();
	      System.out.print("Successfully Updated");
	}

}
