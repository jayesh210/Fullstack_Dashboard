package net.highradius;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDao {
	private static String jdbcURL = "jdbc:mysql://localhost:3306/grey_goose?useSSL=false";
    private static String jdbcUsername = "root";
    private static String jdbcPassword = "Jay@6350";
    	
//    
    // Get connection method
    protected static Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return connection;
    }
    
//    Create or insert user
//    Update User
//    Select User by Id
//    Select All User
    public List < User > selectAllUsers() {

    	 List<User> list=new ArrayList<User>();

	        try{
	            Connection con=getConnection();
	            PreparedStatement ps=con.prepareStatement("select * from winter_internship limit 20");
	            ResultSet rs=ps.executeQuery();
	            while(rs.next()){
	                User n=new User();
	                n.setSl_no(rs.getString(1));
	                n.setBusiness_code(rs.getString(2));  
	                n.setCust_number(rs.getString(3)); 
	                n.setClear_date(rs.getString(4));
	                n.setBuisness_year(rs.getString(5));
	                n.setDoc_id(rs.getString(6));
	                n.setPosting_date(rs.getString(7));
	                n.setDocument_create_date(rs.getString(8));
	                n.setDocument_create_date1(rs.getString(9));
	                n.setDue_in_date(rs.getString(10));
	                n.setInvoice_currency(rs.getString(11));
	                n.setDocument_type(rs.getString(12));
	                n.setPosting_id(rs.getString(13));
	                n.setArea_business(rs.getString(14));
	                n.setTotal_open_amount(rs.getString(15));
	                n.setBaseline_create_date(rs.getString(16));
	                n.setCust_payment_terms(rs.getString(17));
	                n.setInvoice_id(rs.getString(18));
//	                n.setAging_bucket(rs.getString(19));
	                n.setAging_bucket("NULL");
	                n.setIs_deleted(rs.getString(20));
	                n.setIsOpen(rs.getString(21));
	                list.add(n);
	            }
	            con.close();
	        }catch(Exception e){e.printStackTrace();}  
	        return list;
    }
    public int save(User n){
        int status = 1;
        try{
            Connection con= getConnection();
            PreparedStatement ps=con.prepareStatement(
                         "insert into winter_internship(business_code,cust_number,clear_date,buisness_year,doc_id, \r\n" + 
                         "    posting_date, document_create_date, due_in_date , invoice_currency, document_type,\r\n" + 
                         "    posting_id, total_open_amount, baseline_create_date,cust_payment_terms,invoice_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            ps.setString(1,n.getBusiness_code());
            ps.setString(2,n.getCust_number());
            ps.setString(3,n.getClear_date());
            ps.setString(4,n.getBuisness_year());
            ps.setString(5,n.getDoc_id());
            ps.setString(6,n.getPosting_date());
            ps.setString(7,n.getDocument_create_date());
            ps.setString(8,n.getDue_in_date());
            ps.setString(9,n.getInvoice_currency());
            ps.setString(10,n.getDocument_type());
            ps.setString(11,n.getPosting_id());
            ps.setString(12,n.getTotal_open_amount());
            ps.setString(13,n.getBaseline_create_date());
            ps.setString(14,n.getCust_payment_terms());
            ps.setString(15,n.getInvoice_id());
           
            status=ps.executeUpdate();
            con.close();
        }catch(Exception ex){ex.printStackTrace();}
        System.out.print(status);
        return status;
    }
    public static int delete(int id){
        int status=1;
        try{
            Connection con=getConnection();
            PreparedStatement ps=con.prepareStatement("delete from winter_internship where sl_no=?");
            ps.setInt(1,id);
            status=ps.executeUpdate();
            con.close();
        }catch(Exception e){e.printStackTrace();}

        return status;
    }
    public static int update(User n){
        int status=0;
        try{
            Connection con=getConnection();
            PreparedStatement ps=con.prepareStatement(
                         "update winter_internship set invoice_currency=?,cust_payment_terms=? WHERE sl_no=?");
            
            ps.setString(1,n.getInvoice_currency());
            ps.setString(2,n.getCust_payment_terms());
            ps.setString(3, n.getSl_no());
           

            status=ps.executeUpdate();

            con.close();
        }catch(Exception ex){ex.printStackTrace();}

        return status;
    }
    public static List<User> getNameById(User n){
    	List<User> list=new ArrayList<User>();
        try{
            Connection con=getConnection();
            PreparedStatement ps=con.prepareStatement("select * from winter_internship where doc_id=? AND invoice_id=? AND cust_number=? AND buisness_year=? ");
            ps.setString(1,n.getDoc_id());
            ps.setString(2,n.getInvoice_id());
            ps.setString(3,n.getCust_number());
            ps.setString(4,n.getBuisness_year());
           
            System.out.print(ps);
            ResultSet rs=ps.executeQuery();
            while(rs.next()){
                n.setSl_no(rs.getString(1));
                n.setBusiness_code(rs.getString(2));  
                n.setCust_number(rs.getString(3)); 
                n.setClear_date(rs.getString(4));
                n.setBuisness_year(rs.getString(5));
                n.setDoc_id(rs.getString(6));
                n.setPosting_date(rs.getString(7));
                n.setDocument_create_date(rs.getString(8));
                n.setDocument_create_date1(rs.getString(9));
                n.setDue_in_date(rs.getString(10));
                n.setDocument_type(rs.getString(11));
                n.setInvoice_currency(rs.getString(12));
                n.setPosting_id(rs.getString(13));
                n.setArea_business(rs.getString(14));
                n.setTotal_open_amount(rs.getString(15));
                n.setBaseline_create_date(rs.getString(16));
                n.setCust_payment_terms(rs.getString(17));
                n.setInvoice_id(rs.getString(18));
//                n.setAging_bucket(rs.getString(19));
                n.setAging_bucket("NULL");
                n.setIs_deleted(rs.getString(20));
                n.setIsOpen(rs.getString(21));
               list.add(n);
            }
            con.close();
        }catch(Exception ex){ex.printStackTrace();}
       
        return list;
    }
}