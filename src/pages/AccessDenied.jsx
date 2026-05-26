function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-red-500">
          Access Denied
        </h1>

        <p className="mt-5 text-xl">
          You do not have permission.
        </p>

      </div>

    </div>
  );
}

export default AccessDenied;