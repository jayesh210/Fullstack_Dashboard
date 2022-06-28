package net.highradius;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import net.highradius.UserDao;
/**
 * Servlet implementation class add
 */
@WebServlet("/add")
public class add extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 private UserDao userDAO;

	    public void init() {
	        userDAO = new UserDao();
	    }  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public add() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		boolean Response;  
		response.setContentType("application/json");
		response.setHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=response.getWriter();
		
		
	   String business_code=request.getParameter("business_code");
       String cust_number=request.getParameter("cust_number"); 
       String clear_date=request.getParameter("clear_date");
       String buisness_year=request.getParameter("buisness_year");
       String doc_id=request.getParameter("doc_id"); 
       String posting_date=request.getParameter("posting_date");
       String document_create_date=request.getParameter("document_create_date");
       String due_in_date=request.getParameter("due_in_date"); 
       String invoice_currency=request.getParameter("invoice_currency");
       String document_type=request.getParameter("document_type");
       String posting_id=request.getParameter("posting_id"); 
       String total_open_amount=request.getParameter("total_open_amount");
       String baseline_create_date=request.getParameter("baseline_create_date");
       String cust_payment_terms=request.getParameter("cust_payment_terms"); 
       String invoice_id=request.getParameter("invoice_id");
       
       User n = new User();
       n.setBusiness_code(business_code);
       n.setCust_number(cust_number);
       n.setClear_date(clear_date);
       n.setBuisness_year(buisness_year);
       n.setDoc_id(doc_id);
       n.setPosting_date(posting_date);
       n.setDocument_create_date(document_create_date);
       n.setDue_in_date(due_in_date);
       n.setInvoice_currency(invoice_currency);
       n.setDocument_type(document_type);
       n.setPosting_id(posting_id);
       n.setTotal_open_amount(total_open_amount);
       n.setBaseline_create_date(baseline_create_date);
       n.setCust_payment_terms(cust_payment_terms);
       n.setInvoice_id(invoice_id);
       int status=userDAO.save(n);
       if(status>0) {
    	   Response=true;
       }
       else {
    	   Response=false;
       }
       Gson gson=new Gson();
       String JSONRresponse=gson.toJson(Response);
       response.getWriter().append(JSONRresponse);
       out.close();
       System.out.print("Successfully Added" + business_code );
      
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
